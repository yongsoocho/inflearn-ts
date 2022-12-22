import { fork } from "child_process";
// 상속 -> 공통 기능을 구현하고 확장시키며 상속과 관련
abstract class Linux {
  protected abstract _description?: string;
  constructor(private _name: string, private _version: number) {}

  abstract operation(): void;

  turnOff() {
    console.log("모든 프로그램 종료 후 컴퓨터 끄기");
  }
}
// 구현 -> 각 기능들을 override 하는 다형성
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
// Ubuntu Debian
class RedHat extends Linux implements IProcess, IFileSystem {
  protected _description?: string;
  constructor(_name: string, _version: number, description?: string) {
    super(_name, _version);
    if (description) this._description = description;
  }

  public operation(): void {
    console.log("전원 켜기");
  }

  public write(): void {
    console.log();
  }

  public open(): void {
    console.log();
  }

  public close(): void {
    console.log();
  }

  public fork(): void {
    console.log();
  }

  public clone(): void {
    console.log();
  }

  public kill(): void {
    console.log();
  }
}
