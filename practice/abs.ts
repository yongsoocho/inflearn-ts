// abstract -> 상속 , 슈퍼-서브 , 부모-자식
// interface -> 구현 , 어떠한 기능을 설계 명세

abstract class Linux {
  protected abstract _description?: string;
  constructor(protected _name: string, protected _version: number) {}

  abstract operation(): void; // 운영체제가 컴퓨터를 켤 때

  turnOff() {
    console.log("모든 프로그램 종료 후 컴퓨터 끄기");
  }
}
interface IFileSystem {
  write(): void;
  open(): void;
  close(): void;
}
interface IProcess {
  fork(): void;
  clone(): void;
  kill(): void;
}

class RedHat extends Linux implements IFileSystem, IProcess {
  protected _description?: string;
  constructor(_name: string, _version: number, _description: string) {
    super(_name, _version);
    if (_description) this._description = _description;
  }

  operation(): void {
    console.log("컴퓨터 부팅 !!");
  }

  write(): void {
    console.log("red hat 파일 쓰기");
  }
  open(): void {
    console.log("...");
  }
  close(): void {
    console.log("");
  }

  fork(): void {
    console.log("");
  }
  clone(): void {
    console.log("");
  }
  kill(): void {
    console.log("");
  }
}

class Ubuntu extends Linux {
  protected _description?: string;
  constructor(_name: string, _version: number, _description: string) {
    super(_name, _version);
    if (_description) this._description = _description;
  }

  operation(): void {
    console.log("컴퓨터 부팅 !!");
  }
}

class Debian extends Linux {
  protected _description?: string;
  constructor(_name: string, _version: number, _description: string) {
    super(_name, _version);
    if (_description) this._description = _description;
  }

  operation(): void {
    console.log("컴퓨터 부팅 !!");
  }
}
