import { promises as fs } from "node:fs";
import path from "node:path";

export async function GET() {
  try {
    const files = await fs.readdir(path.join(process.cwd(), "src", "blogs"));
    const blogArray = [];

    while (true) {
      for (const file of files) {
        const allBlogContent = await fs.readFile(
          path.join(process.cwd(), "src", "blogs", file),
          { encoding: "utf-8" }
        );
        const titles = allBlogContent.split("\r\n")[2]?.replace("#", "");
        const dates = allBlogContent.split("\r\n")[0];
        const fileName = file.replace(".md", "");
        blogArray.push({ name: fileName, title: titles, date: dates });
      }

      return Response.json({ blog: blogArray });
    }
  } catch (error) {
    return Response.json({ message: "Server " + error }, { status: 500 });
  }
}
