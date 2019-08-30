import { browser, logging, ExpectedConditions, protractor } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display the "Pragma Brewery" title', () => {
    browser.driver.sleep(500);
    expect(page.getPragmaTitle()).toEqual('Pragma Brewery');
  });

  it('should display "Temperature Monitor"', () => {
    expect(page.getTemperatureMonitor()).toEqual('Temperature Monitor');
  });

  it('should type "2" to Truck ID input field', () => {
    browser.driver.sleep(500);
    page.sendKeysTruckIdInput('2');
  });

  it('should show the red times icon', () => {
    expect(page.getTimesIcon().isPresent()).toBeTruthy();
  });

  it('should type backspace to Truck ID input field', () => {
    browser.driver.sleep(500);
    page.sendKeysTruckIdInput(protractor.Key.BACK_SPACE);
  });

  it('should type "0" to Truck ID input field', () => {
    browser.driver.sleep(500);
    page.sendKeysTruckIdInput('0');
  });

  it('should show the green check icon', () => {
    expect(page.getCheckIcon().isPresent()).toBeTruthy();
  });

  it('should show the "Monitor" button', () => {
    browser.driver.sleep(1000);
    expect(page.getMonitorButton().isPresent()).toBeTruthy();
  });

  it('should click the "Monitor" button', () => {
    page.getMonitorButton().click();
  });
});
