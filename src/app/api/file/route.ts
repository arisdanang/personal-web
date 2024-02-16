import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  const buffer = await readFile(
    path.join(process.cwd(), "src/app/assets", "Aris Danang_CV.pdf")
  );
  const headers = new Headers();
  headers.append(
    "Content-Disposition",
    'attachment; filename="Aris Danang_CV.pdf"'
  );
  headers.append("Content-type", "application/pdf");

  return new Response(buffer, {
    headers,
  });
}
