import { ImageResponse, NextRequest } from "next/server";

export const runtime = "edge";

const calSans = fetch(
  new URL("/assets/fonts/CalSans-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(request: NextRequest) {
  const calSansData = await calSans;

  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "drouk.as/";

    return new ImageResponse(
      (
        <div style={{ display: "flex", height: "100%", width: "100%" }}>
          <div tw="flex bg-black h-full w-full items-center justify-center flex-col">
            <div tw="text-white text-5xl leading-snug mt-8 px-32">{title}</div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Cal Sans",
            data: calSansData,
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
