export function VolumeEnabledIcon(props: { audioEnabled: boolean }) {
  return (
    <>
      <div className="padding-1rem text-align-right">
        <i
          className={
            "fa-solid font-size-2rem " +
            (props.audioEnabled ? "fa-volume" : "fa-volume-xmark")
          }
        ></i>
      </div>
    </>
  );
}
