

const HeaderItem = ({name, Icon}) => {
  return (
    <div className="text-white flex items-center text-[15px] font-semibold cursor-pointer hover:underline underline-offset-2 gap-2">
        <Icon />
        <h2>{name}</h2>
    </div>
  )
}

export default HeaderItem
