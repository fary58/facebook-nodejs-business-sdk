 /*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * FundingSourceDetailsCoupon
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class FundingSourceDetailsCoupon extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      amount: 'amount',
      campaign_ids: 'campaign_ids',
      coupon_id: 'coupon_id',
      currency: 'currency',
      display_amount: 'display_amount',
      expiration: 'expiration',
      original_amount: 'original_amount',
      original_display_amount: 'original_display_amount',
    });
  }

}
