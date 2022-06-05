interface JQuery {
  [index: number]: any;
}

// 利用 interface 的类型合并功能
interface Window {
  $: any;
}

class JQuery {
  public length: number;
  constructor(selector: string) {
    const elements = Array.from(document.querySelectorAll(selector));
    this.length = elements ? elements.length : 0;

    for (let i = 0; i < this.length; i++) {
      this[i] = elements[i];
    }
  }

  html(htmlText?: string) {
    if (htmlText) {
      for (let i = 0; i < this.length; i += 1) {
        this[i].innerHTML = htmlText;
      }
    } else {
      return this[0].innerHTML;
    }
  }
}

window.$ = function (selector: string) {
  return new JQuery(selector);
};
