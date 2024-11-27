const Loading = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="flex gap-2">
          <div className="w-5 h-5 rounded-full animate-bounce [animation-delay:-0.3s] bg-primary"></div>
          <div className="w-5 h-5 rounded-full animate-bounce [animation-delay:-0.15s] bg-primary"></div>
          <div className="w-5 h-5 rounded-full animate-bounce  bg-primary"></div>
        </div>
      </div>
    </div>
  )
}
export default Loading
