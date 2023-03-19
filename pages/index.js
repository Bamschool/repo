import { gql } from "@apollo/client";
import client from "client";
import { BlockRenderer } from "components/BlockRenderer";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlcoks";
import { mapMainMenuItems } from "utils/mapMainMenuItems";
import { MainMenu } from "components/MainMenu";
export default function Home(props) {
  console.log("props: ", props);
  return (
    <div className="font-">
      <MainMenu items={props.mainMenuItems} />
      <BlockRenderer blocks={props.blocks} />
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query PageQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocksJSON
            title
          }
        }
        acfOptionsMainMenu {
          mainMenu {
            menuItems {
              items {
                label
                destination {
                  ... on Page {
                    uri
                  }
                }
              }
              menuItem {
                label
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }
          }
        }
      }
    `,
  });
  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);
  return {
    props: {
      mainMenuItems: mapMainMenuItems(
        data.acfOptionsMainMenu.mainMenu.menuItems
      ),
      blocks,
    },
  };
};
