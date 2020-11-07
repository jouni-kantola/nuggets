function configure(options) {
  options.baseUrl ??= "https://my.site";
  options.cdnUrl ??= options.baseUrl;
  return options;
}

const options = configure({ cdnUrl: "https://my.cdn" });
console.log(options); // => {cdnUrl: "https://my.cdn", baseUrl: "https://my.site"}
