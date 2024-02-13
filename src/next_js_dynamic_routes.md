# Dynamic Routes

`app/movies/[id]/page.tsx`

```
export default function Movies(prop: any) {
  return (
    <h1>{prop.params.id}</h1>
  );
}
```
