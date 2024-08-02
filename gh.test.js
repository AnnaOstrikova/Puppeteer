let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
      await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {

    const firstLink = await page.$("header div div a");
    await firstLink.click();
    // await page.waitFor(1000);
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("GitHub for teams · Build like the best teams on the planet · GitHub");
  }, 15000);

  test("The first link attribute", async () => {
    jest.setTimeout(10000);
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 15000);

  test("The page contains Sign in button", async () => {
    jest.setTimeout(10000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team");
  }, 15000);
});

describe("Github page tests from Anna", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/")
  });

  test("The page contains Sign in button on git.com", async () => {
    const btnSelector = ".HeaderMenu-link.HeaderMenu-button.d-inline-flex.d-lg-none.flex-order-1.f5.no-underline.border.color-border-default.rounded-2.px-2.py-1.color-fg-inherit";
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Sign in")
  });

  test ("The first link text 'Product'", async () => {
    const actual = await page.$eval("li:nth-child(1) button:nth-child(1)",
      (link) => link.textContent
    );
    expect(actual).toContain("Product")
  });

  test ("The first link loads on 'Product' page", async() =>{
    await page.click (".HeaderMenu-link.HeaderMenu-link--sign-in.HeaderMenu-button.flex-shrink-0.no-underline.d-none.d-lg-inline-flex.border.border-lg-0.rounded.rounded-lg-0.px-2.py-1");
    await page.waitForSelector("div[class='auth-form-header p-0'] h1");
    const actual = await page.$eval("div[class='auth-form-header p-0'] h1",
      (link) => link.textContent
    );
    expect(actual).toContain("Sign in to GitHub");
  }, 15000);
})





