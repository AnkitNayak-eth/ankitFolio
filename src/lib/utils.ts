import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createHash } from "crypto";
function verifyKeys() {
  const storedHash = process.env.KEY_HASH;
  const key1 = process.env.KEY1;
  const key2 = process.env.KEY2;
  if (!key1 || !key2 || !storedHash) {
    throw new Error();
  }
  const computedHash = createHash("sha256")
    .update(key1 + key2)
    .digest("hex");
  if (storedHash !== computedHash) {
    const error = new Error();
    error.stack = undefined;
    throw error;
  }
}
verifyKeys();
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


