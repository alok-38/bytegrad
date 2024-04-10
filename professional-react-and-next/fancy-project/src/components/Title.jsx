export default function Title({ locked }) {
    return (
      <h1 className="w-[200px] mx-auto leading-[1.2] text-[32px] text-center">
        {locked ? (
          <span className="block">
            Limit! Buy <b>Pro</b> for &gt;5
          </span>
        ) : (
          "Fancy Counter"
        )}
      </h1>
    );
  }