import { FC } from "react";
import { ThirdwebNftMedia, useContract, useNFT } from "@thirdweb-dev/react";
import { Web3Button } from "@thirdweb-dev/react";
import { nftDropContractAddress, stakingContractAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

interface NFTCardProps {
  tokenId: number;
}

const NFTCard: FC<NFTCardProps> = ({ tokenId }) => {
  const { contract } = useContract(nftDropContractAddress, "nft-drop");
  const { data: nft, isLoading } = useNFT(contract, tokenId);

  const getIPFSGatewayURL = (ipfsUrl: string) => {
    const gateway = "https://ipfs.io/ipfs/";
    const cid = ipfsUrl.replace("ipfs://", "");
    return gateway + cid;
  };

  if (isLoading) {
    return <div className={styles.nftBox}>Loading NFT...</div>;
  }

  return (
    <>
      {nft && (
        <div className={styles.nftBox} style={{ textAlign: 'center' }}>
          {nft.metadata && (
            <>
              <div style={{ margin: '0 auto', width: '200px', height: '200px' }}>
                <ThirdwebNftMedia
                  metadata={{
                    ...nft.metadata,
                    image: nft.metadata.image ? getIPFSGatewayURL(nft.metadata.image as string) : undefined
                  }}
                  className={styles.nftMedia}
                  height="200px"
                  width="200px"
                  controls={false}
                />
              </div>
              <h3>{nft.metadata.name || `NFT #${tokenId}`}</h3>
            </>
          )}
          <div className={styles.centerButton}>
            <Web3Button
              action={async (contract) => {
                try {
                  await contract?.call("withdraw", [[tokenId]]);
                } catch (error) {
                  console.log("Error withdrawing NFT:", error);
                }
              }}
              contractAddress={stakingContractAddress}
            >
              Withdraw
            </Web3Button>
          </div>
        </div>
      )}
    </>
  );
};

export default NFTCard;
