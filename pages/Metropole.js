import Layout from "../Components/Layout/Layout";
import HeaderNav from "../Components/HeaderNav/HeaderNav";
import Footer from "../Components/Footer/Footer";
import GalleryStruct from "../Components/Gallery/GalleryStruct";
import GalleryItems from "../Components/Gallery/GalleryItems";

export default function Metropole() {
  return (
    <div id="Metropole">
      <Layout title="Kontakt" />
      <HeaderNav
        home="passive fa fa-home"
        letovanje="passive"
        metropole="active"
        kontakt="passive"
      />
      {GalleryItems.map((obj, i) => {
        return (
          <div key={i}>
            <GalleryStruct
              id={obj.id}
              descriptionTitle={obj.title}
              description={obj.description}
              length={i}
              obj={obj.images}
              table={obj.table}
            />
          </div>
        );
      })}
      <Footer />
    </div>
  );
}
