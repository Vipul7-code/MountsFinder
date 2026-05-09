import { readFile } from "node:fs/promises";

const logoPath =
  "C:\\Users\\Vipul\\.cursor\\projects\\c-Users-Vipul-Desktop-Mounts-finder\\assets\\c__Users_Vipul_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_IMG-20260422-WA0010-e4a9111c-18b7-464f-bd23-77d019dcb0a0.png";

export async function GET() {
  const logo = await readFile(logoPath);
  return new Response(new Uint8Array(logo), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
