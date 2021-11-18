export type CoinShortName = "BTC" | "ETH" | "BIT" | "ADA" | "BNB" | "DOGE" | "DOT" | "LTC" | "SOL" | "XRP"

export const CoinNamesObject:{
	[key in CoinShortName]: string;
} = {
	"BTC": "Bitcion",
	"ETH": "Ethereum",
	"BIT": "BitDAO",
	"ADA": "Cardano",
	"BNB": "Binance Coin",
	"DOT": "Polkadot",
	"DOGE": "Dogecoin",
	"LTC": "Litecoin",
	"SOL": "Solana",
	"XRP": "XRP",
}
