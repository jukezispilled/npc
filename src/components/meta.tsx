import { buildUrl } from "@/utils/buildUrl";
import Head from "next/head";

export const Meta = () => {
  const title = "NPC";
  const description = "your npc companion";
  const iconUrl = "/npc.png"; // Path to your icon in public folder
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Favicon and icons */}
      <link rel="icon" type="image/png" href={iconUrl} />
      <link rel="shortcut icon" href={iconUrl} />
      <link rel="apple-touch-icon" href={iconUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={buildUrl(iconUrl)} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={buildUrl(iconUrl)} />
      
      {/* Additional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
    </Head>
  );
};