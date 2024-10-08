export default function VideoSection() {
  return (
    <div className="m-auto p-4 md:w-[90%] lg:w-3/4">
      <video
        className="m-auto"
        controls
        preload="auto"
        src="/assets/videos/sft2.mov"
      />
    </div>
  );
}
