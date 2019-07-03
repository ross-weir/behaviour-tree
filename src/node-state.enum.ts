/** Use strings to assist in debugging. */
export enum NodeState {
  /** The node tick returned a failure. */
  Failure = "FAILURE",
  /** The node tick is still running. */
  Running = "RUNNING",
  /** The node tick returned success. */
  Success = "SUCCESS",
}
