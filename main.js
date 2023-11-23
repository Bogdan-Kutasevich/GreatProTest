/* eslint-disable no-param-reassign */
const activeClass = 'pricing__td--active'

const toggleSwitchBasic = document.getElementById('toggleSwitchBasic')
const monthlyTextBasic = document.querySelector('.pricing__td-switch-during-monthly-basic')
const yearlyTextBasic = document.querySelector('.pricing__td-switch-during-yearly-basic')
const dataElementBasic = document.querySelector('[data-monthlyBasic]')
const monthlyBasicValue = dataElementBasic.getAttribute('data-monthlyBasic')
const yearlyBasicValue = dataElementBasic.getAttribute('data-yearlyBasic')

const toggleSwitchStandart = document.getElementById('toggleSwitchStandart')
const monthlyTextStandart = document.querySelector('.pricing__td-switch-during-monthly-standart')
const yearlyTextStandart = document.querySelector('.pricing__td-switch-during-yearly-standart')
const dataElementStandart = document.querySelector('[data-monthlyStandart]')
const monthlyStandartValue = dataElementStandart.getAttribute('data-monthlyStandart')
const yearlyStandartValue = dataElementStandart.getAttribute('data-yearlyStandart')

const toggleSwitchPremium = document.getElementById('toggleSwitchPremium')
const monthlyTextPremium = document.querySelector('.pricing__td-switch-during-monthly-premium')
const yearlyTextPremium = document.querySelector('.pricing__td-switch-during-yearly-premium')
const dataElementPremium = document.querySelector('[data-monthlyPremium]')
const monthlyPremiumValue = dataElementPremium.getAttribute('data-monthlyPremium')
const yearlyPremiumValue = dataElementPremium.getAttribute('data-yearlyPremium')

const tooglePrice = (toggle, monthly, yearly, classActive, dataElem, monthlyValue, yearlyValue) => {
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      monthly.classList.remove(classActive)
      yearly.classList.add(classActive)
      dataElem.textContent = yearlyValue
    } else {
      monthly.classList.add(classActive)
      yearly.classList.remove(classActive)
      dataElem.textContent = monthlyValue
    }
  })
}

tooglePrice(
  toggleSwitchBasic,
  monthlyTextBasic,
  yearlyTextBasic,
  activeClass,
  dataElementBasic,
  monthlyBasicValue,
  yearlyBasicValue,
)

tooglePrice(
  toggleSwitchStandart,
  monthlyTextStandart,
  yearlyTextStandart,
  activeClass,
  dataElementStandart,
  monthlyStandartValue,
  yearlyStandartValue,
)

tooglePrice(
  toggleSwitchPremium,
  monthlyTextPremium,
  yearlyTextPremium,
  activeClass,
  dataElementPremium,
  monthlyPremiumValue,
  yearlyPremiumValue,
)
