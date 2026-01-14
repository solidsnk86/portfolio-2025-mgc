export class GetLocation {
  private static async getData() {
    return await fetch("https://solid-geolocation.vercel.app/location")
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => console.log(error));
  }

  public static async ip() {
    const data = (await this.getData()) as Promise<{ ip: string }>;
    return (await data).ip || "N/A";
  }

  public static async city() {
    const data = (await this.getData()) as Promise<{ city: { name: string } }>;
    return (await data).city.name || "N/A";
  }

  public static async country() {
    const data = (await this.getData()) as Promise<{
      country: { name: string };
    }>;
    return (await data).country.name || "N/A";
  }

  public static async emojiFlag() {
    const data = (await this.getData()) as Promise<{
      country: { emojiFlag: string };
    }>;
    return (await data).country.emojiFlag;
  }

  public static async coords() {
    const data = (await this.getData()) as Promise<{
      coords: { latitude: number | string; longitude: number | string };
    }>;
    const { coords } = await data;
    return coords;
  }

  public static async os() {
    const data = (await this.getData()) as Promise<{
      sysInfo: {
        system: string;
        webBrowser: { browser: string; version: string };
      };
    }>;
    const { system, webBrowser } = (await data).sysInfo;
    const { browser, version } = webBrowser;
    return { system, browser, version };
  }
}
