import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getRootComponent(): ElementFinder {
    return element(by.tagName('app-root'));
  }

  getWelcomeComponent(): ElementFinder {
    return this.getRootComponent().element(by.tagName('app-welcome'));
  }

  getMonitorComponent(): ElementFinder {
    return this.getRootComponent().element(by.tagName('app-monitor'));
  }

  getPragmaTitle(): Promise<string> {
    return this.getWelcomeComponent().element(by.css('h2')).getText() as Promise<string>;
  }

  getTemperatureMonitor(): Promise<string> {
    return this.getWelcomeComponent().element(by.css('h3')).getText() as Promise<string>;
  }

  getTruckIdInput(): ElementFinder {
    return this.getWelcomeComponent().element(by.css('input'));
  }

  sendKeysTruckIdInput(id: string): Promise<void> {
    return this.getTruckIdInput().sendKeys(id) as Promise<void>;
  }

  getCheckIcon(): ElementFinder {
    return this.getWelcomeComponent().element(by.className('check'));
  }

  getTimesIcon(): ElementFinder {
    return this.getWelcomeComponent().element(by.className('times'));
  }

  getMonitorButton(): ElementFinder {
    return this.getWelcomeComponent().element(by.buttonText('Monitor'));
  }

  getTile(): ElementFinder {
    return element(by.css('app-temperature'));
  }
}
