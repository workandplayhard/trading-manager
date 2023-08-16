export enum TradeCommand {
  Buy = 0,
  Sell = 1,
  BuyLimit = 2,
  SellLimit = 3,
  BuyStop = 4,
  SellStop = 5,
  Balance = 6,
  Credit = 7
}

export enum TradeState {
  /**
   * Open normal
   */
  OpenNormal,
  /**
   * Open remand
   */
  OpenRemand,
  /**
   * Open restored
   */
  OpenRestored,
  /**
   * Close normal
   */
  ClosedNormal,
  /**
   * Closed part
   */
  ClosedPart,
  /**
   * Closed by
   */
  ClosedBy,
  /**
   * Deleted
   */
  Deleted,
}

export enum TradeReason {
  /**
   * Client
   */
  Client = 0,
  /**
   * Expert
   */
  Expert = 1,
  /**
   * Dealer
   */
  Dealer = 2,
  /**
   * Signal
   */
  Signal = 3,
  /**
   * Gateway
   */
  Gateway = 4,
  /**
   * Mobile terminal
   */
  Mobile = 5,
  /**
   * Web terminal
   */
  Web = 6,
  /**
   * API
   */
  API = 7,
}

export enum ActivationType {
  None = 0,
  SL = 1,
  TP = 2,
  Pending = 3,
  Stopout = 4,
  SLRollback = -1,
  TPRollback = -2,
  PendingRollback = -3,
  StopoutRollback = -4,
}

export interface ITrade {
  Order: number;
  Login: number;
  Symbol: string;
  Digits: number;
  Cmd: TradeCommand;
  Volume: number;
  OpenTime: number;
  State: TradeState;
  OpenPrice: number;
  Sl: number;
  Tp: number;
  CloseTime: number;
  GwVolume: number;
  Expiration: number;
  Reason: TradeReason;
  ConvRates: number[];
  Commission: number;
  CommissionAgent: number;
  Storage: number;
  ClosePrice: number;
  Profit: number;
  Taxes: number;
  Magic: number;
  Comment: string;
  GwOrder: number;
  Activation: ActivationType;
  GwOpenPrice: number;
  GwClosePrice: number;
  MarginRate: number;
  Timestamp: number;
  ApiData: number[];
  NewTradingEngine: boolean;
}
