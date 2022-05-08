import { gql, useQuery } from "@apollo/client";

export const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
      name
    }
  }
`;

export interface ExchangeRate {
  currency: string;
  rate: string;
  name: string;
}

interface ExchangeRateResponse {
  rates: ExchangeRate[];
}

export default function useExchangeRates() {
  return useQuery<ExchangeRateResponse>(EXCHANGE_RATES);
}
