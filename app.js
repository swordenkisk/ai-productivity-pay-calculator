"use strict";

const form = document.querySelector("#calculator-form");
const currencyInput = document.querySelector("#currency");
const currentPayInput = document.querySelector("#current-pay");
const baselineValueInput = document.querySelector("#baseline-value");
const productivityInput = document.querySelector("#productivity");
const realizationRateInput = document.querySelector("#realization-rate");
const employeeShareInput = document.querySelector("#employee-share");

const productivityOutput = document.querySelector("#productivity-output");
const realizationOutput = document.querySelector("#realization-output");
const shareOutput = document.querySelector("#share-output");

const additionalValueResult = document.querySelector("#additional-value");
const payIncreaseResult = document.querySelector("#pay-increase");
const totalPayResult = document.querySelector("#total-pay");
const payMultipleResult = document.querySelector("#pay-multiple");

function readNumber(input) {
  return Number(input.value);
}

function formatCurrency(amount, currency) {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(amount);
}

function updateCalculator() {
  if (!form.reportValidity()) {
    return;
  }

  const currentPay = readNumber(currentPayInput);
  const baselineValue = readNumber(baselineValueInput);
  const productivity = readNumber(productivityInput);
  const realizationRate = readNumber(realizationRateInput) / 100;
  const employeeShare = readNumber(employeeShareInput) / 100;
  const currency = currencyInput.value;

  productivityOutput.textContent = `${productivity}×`;
  realizationOutput.textContent = `${Math.round(realizationRate * 100)}%`;
  shareOutput.textContent = `${Math.round(employeeShare * 100)}%`;

  const additionalValue = Math.max(
    0,
    baselineValue * (productivity - 1) * realizationRate
  );
  const payIncrease = additionalValue * employeeShare;
  const totalPay = currentPay + payIncrease;
  const payMultiple = currentPay > 0 ? totalPay / currentPay : 0;

  additionalValueResult.textContent = formatCurrency(additionalValue, currency);
  payIncreaseResult.textContent = formatCurrency(payIncrease, currency);
  totalPayResult.textContent = formatCurrency(totalPay, currency);
  payMultipleResult.textContent = `${payMultiple.toFixed(2)}×`;
}

form.addEventListener("input", updateCalculator);
form.addEventListener("change", updateCalculator);

updateCalculator();
