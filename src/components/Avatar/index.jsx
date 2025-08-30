function Avatar({ name }) {
  return (
    <div className="avatar avatar-placeholder">
      <div className="bg-neutral text-neutral-content w-12 rounded-full">
        <span className="text-3xl">{name}</span>
      </div>
    </div>
  );
}

export default Avatar;
