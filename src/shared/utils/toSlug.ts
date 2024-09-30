export function toSlug(str: string) {
  const regex = /[^a-zA-Z]/g;
  return str.replace(regex, "").toLowerCase().split(" ").join("-");
}
