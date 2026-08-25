import { brand } from '@/data/brand';

export default function Head() {
  return (
    <>
      <title>{brand.name}</title>
      <meta name="application-name" content={brand.name} />
      <meta name="description" content={`${brand.name} - modern real estate platform`} />
      <link rel="icon" type="image/png" href={brand.logo} />
      <link rel="shortcut icon" type="image/png" href={brand.logo} />
      <link rel="apple-touch-icon" href={brand.logo} />
    </>
  );
}
