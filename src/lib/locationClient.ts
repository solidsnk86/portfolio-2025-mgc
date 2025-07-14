export class GetLocation {
  private static async getData() {
    return await fetch("https://solid-geolocation.vercel.app/location")
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => console.log(error));
  }

  public static async ip() {
    const data = (await this.getData()) as Promise<{ ip: string }>;
    return (await data).ip;
  }

  public static async city() {
    const data = (await this.getData()) as Promise<{ city: { name: string } }>;
    return (await data).city.name;
  }

  public static async country() {
    const data = (await this.getData()) as Promise<{ country: { name: string } }>;
    return (await data).country.name;
  }

  public static async emojiFlag() {
    const data = (await this.getData()) as Promise<{ country: { emojiFlag: string } }>;
    return (await data).country.emojiFlag;
  }

  public static async os() {
    const data = (await this.getData()) as Promise<{ sysInfo: { system: string } }>;
    return (await data).sysInfo.system;
  }
}
