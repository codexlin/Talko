export function notFound() {
  return (
    <div className="flex h-[50vh] w-full flex-col items-center justify-center px-10">
      <p className="mt-2 text-muted-foreground">
        Page not found Or Permission denied, contact owner of this resource.
      </p>
      <p className="mt-2 text-muted-foreground">
        If you consider this a bug, please contact us at{" "}
      </p>
    </div>
  )
}

export default notFound
