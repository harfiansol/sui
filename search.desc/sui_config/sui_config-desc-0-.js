searchState.loadedDescShard("sui_config", 0, "Returns the argument unchanged.\nCheck if the genesis blob exists in the given directory or …\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nInitial set of parameters for a chain.\nThe duration of an epoch, in milliseconds.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nHelper to read a TokenDistributionSchedule from a csv file.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nprotocol version that the chain starts at.\nThe rate at which the distribution amount decays at the …\nThe amount of stake subsidy to be drawn down per …\nNumber of distributions to occur before the distribution …\nThe starting epoch in which stake subsidies start being …\nIndicates if this allocation should be staked at genesis …\nReturn an ephemeral, available port. On unix systems, the …\nIn non-simtest, we always only have one IP address which …\nReturns localhost, which is always 127.0.0.1.\nReturns a new unique TCP address (Multiaddr) for …\nReturns a new unique TCP address (SocketAddr) for …\nReturns a new unique TCP address in String format for …\nReturns a new unique UDP address for localhost, by finding …\nReturns a new unique TCP address for the given host, by …\nReturns a new unique UDP address for the given host, by …\nWrapper struct for AuthorityKeyPair that can be …\nConfiguration for the threshold(s) at which we consider …\nDefault commission rate of 2%\nDefault gas price of 100 Mist\nWrapper struct for SuiKeyPair that can be deserialized …\nConfigurations which determine how we dump state debug …\nAllow overriding the chain for testing purposes. For …\nUpper bound on the number of checkpoints that can be …\nOptional directory used for data ingestion pipeline When …\nEnables the compaction filter for pruning the objects …\nIf a value is set, it determines if writes to DB can …\nSize of the broadcast channel used for notifying other …\ntime interval used by the pruner to determine whether …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nDetermines the jsonrpc server type as either:\ndisables object tombstone pruning. We don’t serialize it …\nNumber of seconds to wait for effects of a batch of …\nmaximum number of checkpoints in the pruning batch. Can be …\nMaximum number of pending transactions to submit to …\nWhen defined caps the calculated submission position to …\nmaximum number of transaction in the pruning batch\nnumber of epochs to keep the latest version of objects for.\nnumber of epochs to keep the latest version of …\nnumber of the latest epoch dbs to retain\nSize of the channel used for buffering object debt updates …\nSize of the LRU cache used for tracking object utilization.\nSize of the LRU cache used for storing local execution …\nSize of the channel used for buffering local execution …\nGlobal burst limit for sharing observations.\nUnless the current local observation differs from the last …\nMinimum interval between sharing multiple observations of …\nUnless target object utilization is exceeded by at least …\nGlobal per-second rate limit for sharing observations. …\nenables periodic background compaction for old SST files …\npruner’s runtime interval used for aggressive mode\nIf true, the execution time observer will report …\nThe submit delay step to consensus defined in …\nIn a <code>sui-node</code> binary, this is set to …\nNumber of uncommitted transactions at which to pause …\nNumber of uncommitted transactions at which to refuse new …\nMaximum number of entries in each cache. (There are …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nAzure Blob Store\nLocal file system\nGoogle Cloud Store\nObject-store type.\nAWS S3\nWhen using Amazon S3 as the object store, set this to an …\nAllow unencrypted HTTP connection to AWS.\nWhen using Amazon S3 as the object store, set this to …\nWhen using Amazon S3 as the object store, set this to the …\nWhen using Amazon S3 as the object store, set this to the …\nEnable virtual hosted style requests\nWhen using Microsoft Azure as the object store, set this …\nWhen using Microsoft Azure as the object store, set this …\nName of the bucket to use for the object store. Must also …\nPath of the local directory. Only relevant is …\nReturns the argument unchanged.\nReturns the argument unchanged.\nWhen using Google Cloud Storage as the object store and …\nWhen using Google Cloud Storage as the object store, set …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhich object storage to use. If not specified, defaults to …\nAccess Type of a node. AccessType info is shared in the …\nSee docstring for <code>AccessType</code>.\nLike <code>seed_peers</code> in <code>P2pConfig</code>, allowlisted peers will …\nSet the upper bound on the number of checkpoint contents …\nSet the upper bound on the number of individual …\nSet the timeout that should be used when sending RPC …\nSet the upper bound on the number of checkpoint headers to …\nSize in bytes above which network messages are considered …\nThe external address other nodes can use to reach this …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nPer-peer inflight limit for the GetCheckpointContents RPC.\nPer-checkpoint inflight limit for the …\nPer-peer rate-limit (in requests/sec) for the …\nPer-peer rate-limit (in requests/sec) for the …\nPer-peer rate-limit (in requests/sec) for the …\nQuery peers for their latest checkpoint every interval …\nQuery peers for their latest checkpoint every interval …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe address that the p2p network will bind on.\nSize of the StateSync actor’s mailbox.\nSize of the Randomness actor’s mailbox. This should be …\nMaximum proportion of total peer weight to ignore in case …\nMaximum number of rounds for which partial signatures …\nMaximum number of rounds ahead of our most recent …\nInterval at which to retry sending partial signatures …\nNumber of peers to query each interval.\nList of “known-good” checkpoints that state sync will …\nPer-peer rate-limit (in requests/sec) for the …\nSeedPeers are preferred and the node will always try to …\nPer-peer inflight limit for the SendPartialSignatures RPC.\nSize of the broadcast channel use for notifying other …\nTarget number of concurrent connections to establish.\nSet the timeout that should be used when sending most …\nThe amount of time to wait before retry if there are no …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThis holds limits that are only set and used by the …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nReturn sign-time only limit for back edges for the …\nMeterConfig for metering packages during signing. It is …")