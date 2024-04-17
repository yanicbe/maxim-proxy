export const config = {
  runtime: 'experimental-edge',
};

interface NextRequest {
  domain: string;
  prevUrl: string;
  userAgent: string;
  ip: string;
  queryParam?: string;
}

interface NextResponseUrl {
  url: string;
}

interface NextResponseLandingPage {
  _id: string;
  ofLink: string;
  backgroundImg: string;
  avatarImg: string;
  name: string;
  username: string;
  responseTime: number;
  messageText: string;
  percentOff: number;
  belongsToDomain: string;
  brightness?: number;
}

export default async (req: Request) => {
  const url = new URL(req.url)
  if (url.hostname === "kellysecrets.com") {
    return createRedirectReponse("https://onlykellyyy.com/s=kellysecrets")
  } else if (url.hostname === "playwithkelly.com") {
    return createRedirectReponse("https://onlykellyyy.com/s=playwithkelly")
  } else {
    return createRedirectReponse("https://onlykellyyy.com")
  }
}

/**
* Returns a 302 response that will redirect to the given url
*/
function createRedirectReponse(url: string) {
  const headers = new Headers();
  headers.set("Location", url);
  return new Response("", {
    status: 302,
    headers
  })
}

// onlykellyyy.com
// https://onlyfans.com/cutiekellyyy/c13

// kellysecrets.com
// https://onlyfans.com/cutiekellyyy/c14

// playwithkelly.com
// https://onlyfans.com/cutiekellyyy/c15