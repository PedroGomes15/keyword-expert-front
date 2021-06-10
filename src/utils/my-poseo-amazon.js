const baseUrl = "https://api.myposeo.com/1.2/m";

export const getAmazonBestSelers = async () => {
  const bestSelersRequest = fetch(
    `${baseUrl}/amazon/best-sellers?` +
      new URLSearchParams({
        key: "K0M23H4PVbLiaSqd06H3mnSdXJ24odq%2BK12FPhVOn2NdfgdbjSwBHp69ZICAM9x8y0KE",
        categoryId: "CJqS5JNgRY1",
        country: "fr",
        page: 1,
      })
  );

  const bestSelers = await Promise.all([bestSelersRequest]);

  const bestSelersJson = await bestSelers.json();
  return bestSelersJson;
};
