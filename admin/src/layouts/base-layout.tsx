import PrimaryLayout from './primary-layout';
import PublicLayout from './public-layout';

type IDefaultProps = {
  children: any;
  layout?: string;
}

const LayoutMap = {
  primary: PrimaryLayout,
  public: PublicLayout
} as any;


export default function DefaultLayout({
  children,
  layout
}: IDefaultProps) {
  const Container = layout && LayoutMap[layout] ? LayoutMap[layout] : PrimaryLayout;
  return (
    <Container>{children}</Container>
  );
}
