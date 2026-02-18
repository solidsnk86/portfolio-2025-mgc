const GITHUB_TOKEN = process.env.GITHUB_TOKEN

export async function GET() {
    const allProjects = [];
    let page = 1;
    try {
      while (true) {
        const response = await fetch(
          `https://api.github.com/users/solidsnk86/repos?page=${page}`,
          {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
              Accept: "application/vnd.github.v3+json",
            },
          }
        );
        const headerLink = response.headers.get("link")?.split(";")
        if (!response.ok) throw new Error(response.statusText);
        const allData = await response.json();
        
        for (const data of allData) {
          allProjects.push(data)
        }

        page++;
        if (!headerLink?.[1].includes('rel="next"')) {
          return Response.json({ allProjects }, { status: 200 });
        }
        
      }
    } catch (error) {
      return Response.json({ message: error }, { status: 500 });
    }
}