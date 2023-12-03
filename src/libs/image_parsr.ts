export async function parseFileToBase64(file: any) {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const base64 = buffer.toString("base64");

  return base64;
}

export async function parseBase64ToFile(base64: string, filename: string) {
  const buffer = Buffer.from(base64, "base64");
  const file = new File([buffer], filename);

  return file;
}
