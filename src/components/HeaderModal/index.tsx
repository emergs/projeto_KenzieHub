import { HeaderModalStyled, IHeaderModal } from "./style"

const HeaderModal = ({ title, btnClose }: IHeaderModal) => {
  return (
    <HeaderModalStyled>
      <h2>{title}</h2>
      <button onClick={() => { btnClose() }}>X</button>
    </HeaderModalStyled>
  )
}

export default HeaderModal