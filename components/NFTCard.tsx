import {
  ThirdwebNftMedia,
  useContract,
  useNFT,
  Web3Button,
} from "@thirdweb-dev/react";
import type { FC } from "react";
import {
  nftDropContractAddress,
  stakingContractAddress,
} from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

interface NFTCardProps {
  tokenId: number;
}

const NFTCard: FC<NFTCardProps> = ({ tokenId }) => {
  const { contract } = useContract(nftDropContractAddress, "nft-drop");
  const { data: nft, isLoading } = useNFT(contract, tokenId);

  if (isLoading) {
    return <div className={styles.nftBox}>Loading NFT...</div>;
  }

  return (
    <>
      {nft && (
        <div className={styles.nftBox} style={{ textAlign: 'center' }}>
          {nft.metadata && (
            <ThirdwebNftMedia
              metadata={nft.metadata}
              className={styles.nftMedia}
              height="200px"
              width="200px"
            />
          )}
          <h3>{nft.metadata.name}</h3>
          <div className={styles.centerButton}>
            <Web3Button
              action={async (contract) => {
                try {
                  await contract?.call("withdraw", [[nft.metadata.id]]);
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
