import { execSync } from "child_process";

export function tryCodegen(root: string): boolean {
  try {
    execSync("npm run generate", { stdio: "ignore" });
    return true;
  } catch (e) {
    return false;
  }
}
