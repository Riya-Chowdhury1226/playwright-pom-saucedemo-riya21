class InventoryPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');
    this.inventoryList = page.locator('[data-test="inventory-list"]');
  }

  async isLoaded() {
    try {
      await this.title.waitFor({ state: 'visible', timeout: 5000 });
      return (await this.title.textContent()).trim() === 'Products';
    } catch {
      return false;
    }
  }
}

module.exports = { InventoryPage };