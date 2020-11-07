(async () => {
  const [dep1, dep2, dep3] = await Promise.all([
    Promise.resolve("a"),
    Promise.resolve("b"),
    Promise.resolve("c"),
  ]);

  start({ dep1, dep2, dep3 });
})().catch(reason => {
  console.error(reason);
});

function start({ dep1, dep2, dep3 }) {
  console.log(dep1, dep2, dep3);
}
