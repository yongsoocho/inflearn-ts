class Singleton {
  // private static instance: Singleton = new Singleton();
  private static _instance: Singleton;

  private constructor() {
    console.log("haha");
  }

  public static getInstance() {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new Singleton();
    return this._instance;
  }
}

const single: Singleton = Singleton.getInstance();
