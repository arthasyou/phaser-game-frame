export interface m_1001_tos {
}

export function encodem_1001_tos(message: m_1001_tos): Uint8Array {
  let bb = popByteBuffer();
  _encodem_1001_tos(message, bb);
  return toUint8Array(bb);
}

function _encodem_1001_tos(message: m_1001_tos, bb: ByteBuffer): void {
}

export function decodem_1001_tos(binary: Uint8Array): m_1001_tos {
  return _decodem_1001_tos(wrapByteBuffer(binary));
}

function _decodem_1001_tos(bb: ByteBuffer): m_1001_tos {
  let message: m_1001_tos = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface UserInfoResult {
  user_id?: number;
  name?: string;
  balance?: number;
  icon?: string;
}

export function encodeUserInfoResult(message: UserInfoResult): Uint8Array {
  let bb = popByteBuffer();
  _encodeUserInfoResult(message, bb);
  return toUint8Array(bb);
}

function _encodeUserInfoResult(message: UserInfoResult, bb: ByteBuffer): void {
  // optional uint32 user_id = 1;
  let $user_id = message.user_id;
  if ($user_id !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32(bb, $user_id);
  }

  // optional string name = 2;
  let $name = message.name;
  if ($name !== undefined) {
    writeVarint32(bb, 18);
    writeString(bb, $name);
  }

  // optional uint32 balance = 3;
  let $balance = message.balance;
  if ($balance !== undefined) {
    writeVarint32(bb, 24);
    writeVarint32(bb, $balance);
  }

  // optional string icon = 4;
  let $icon = message.icon;
  if ($icon !== undefined) {
    writeVarint32(bb, 34);
    writeString(bb, $icon);
  }
}

export function decodeUserInfoResult(binary: Uint8Array): UserInfoResult {
  return _decodeUserInfoResult(wrapByteBuffer(binary));
}

function _decodeUserInfoResult(bb: ByteBuffer): UserInfoResult {
  let message: UserInfoResult = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint32 user_id = 1;
      case 1: {
        message.user_id = readVarint32(bb) >>> 0;
        break;
      }

      // optional string name = 2;
      case 2: {
        message.name = readString(bb, readVarint32(bb));
        break;
      }

      // optional uint32 balance = 3;
      case 3: {
        message.balance = readVarint32(bb) >>> 0;
        break;
      }

      // optional string icon = 4;
      case 4: {
        message.icon = readString(bb, readVarint32(bb));
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface FruitPlayArg {
  flag?: string;
  fruits?: Bet[];
}

export function encodeFruitPlayArg(message: FruitPlayArg): Uint8Array {
  let bb = popByteBuffer();
  _encodeFruitPlayArg(message, bb);
  return toUint8Array(bb);
}

function _encodeFruitPlayArg(message: FruitPlayArg, bb: ByteBuffer): void {
  // optional string flag = 1;
  let $flag = message.flag;
  if ($flag !== undefined) {
    writeVarint32(bb, 10);
    writeString(bb, $flag);
  }

  // repeated Bet fruits = 2;
  let array$fruits = message.fruits;
  if (array$fruits !== undefined) {
    for (let value of array$fruits) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeBet(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }
}

export function decodeFruitPlayArg(binary: Uint8Array): FruitPlayArg {
  return _decodeFruitPlayArg(wrapByteBuffer(binary));
}

function _decodeFruitPlayArg(bb: ByteBuffer): FruitPlayArg {
  let message: FruitPlayArg = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional string flag = 1;
      case 1: {
        message.flag = readString(bb, readVarint32(bb));
        break;
      }

      // repeated Bet fruits = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.fruits || (message.fruits = []);
        values.push(_decodeBet(bb));
        bb.limit = limit;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface FruitPlayResult {
  lights?: number[];
  fruits?: Bet[];
  odds?: number;
  part?: Bet[];
  win?: number;
  balance?: number;
}

export function encodeFruitPlayResult(message: FruitPlayResult): Uint8Array {
  let bb = popByteBuffer();
  _encodeFruitPlayResult(message, bb);
  return toUint8Array(bb);
}

function _encodeFruitPlayResult(message: FruitPlayResult, bb: ByteBuffer): void {
  // repeated uint32 lights = 1;
  let array$lights = message.lights;
  if (array$lights !== undefined) {
    let packed = popByteBuffer();
    for (let value of array$lights) {
      writeVarint32(packed, value);
    }
    writeVarint32(bb, 10);
    writeVarint32(bb, packed.offset);
    writeByteBuffer(bb, packed);
    pushByteBuffer(packed);
  }

  // repeated Bet fruits = 2;
  let array$fruits = message.fruits;
  if (array$fruits !== undefined) {
    for (let value of array$fruits) {
      writeVarint32(bb, 18);
      let nested = popByteBuffer();
      _encodeBet(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional uint32 odds = 3;
  let $odds = message.odds;
  if ($odds !== undefined) {
    writeVarint32(bb, 24);
    writeVarint32(bb, $odds);
  }

  // repeated Bet part = 4;
  let array$part = message.part;
  if (array$part !== undefined) {
    for (let value of array$part) {
      writeVarint32(bb, 34);
      let nested = popByteBuffer();
      _encodeBet(value, nested);
      writeVarint32(bb, nested.limit);
      writeByteBuffer(bb, nested);
      pushByteBuffer(nested);
    }
  }

  // optional uint32 win = 5;
  let $win = message.win;
  if ($win !== undefined) {
    writeVarint32(bb, 40);
    writeVarint32(bb, $win);
  }

  // optional uint32 balance = 6;
  let $balance = message.balance;
  if ($balance !== undefined) {
    writeVarint32(bb, 48);
    writeVarint32(bb, $balance);
  }
}

export function decodeFruitPlayResult(binary: Uint8Array): FruitPlayResult {
  return _decodeFruitPlayResult(wrapByteBuffer(binary));
}

function _decodeFruitPlayResult(bb: ByteBuffer): FruitPlayResult {
  let message: FruitPlayResult = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // repeated uint32 lights = 1;
      case 1: {
        let values = message.lights || (message.lights = []);
        if ((tag & 7) === 2) {
          let outerLimit = pushTemporaryLength(bb);
          while (!isAtEnd(bb)) {
            values.push(readVarint32(bb) >>> 0);
          }
          bb.limit = outerLimit;
        } else {
          values.push(readVarint32(bb) >>> 0);
        }
        break;
      }

      // repeated Bet fruits = 2;
      case 2: {
        let limit = pushTemporaryLength(bb);
        let values = message.fruits || (message.fruits = []);
        values.push(_decodeBet(bb));
        bb.limit = limit;
        break;
      }

      // optional uint32 odds = 3;
      case 3: {
        message.odds = readVarint32(bb) >>> 0;
        break;
      }

      // repeated Bet part = 4;
      case 4: {
        let limit = pushTemporaryLength(bb);
        let values = message.part || (message.part = []);
        values.push(_decodeBet(bb));
        bb.limit = limit;
        break;
      }

      // optional uint32 win = 5;
      case 5: {
        message.win = readVarint32(bb) >>> 0;
        break;
      }

      // optional uint32 balance = 6;
      case 6: {
        message.balance = readVarint32(bb) >>> 0;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface BsPlayArg {
  index?: number;
  amount?: number;
}

export function encodeBsPlayArg(message: BsPlayArg): Uint8Array {
  let bb = popByteBuffer();
  _encodeBsPlayArg(message, bb);
  return toUint8Array(bb);
}

function _encodeBsPlayArg(message: BsPlayArg, bb: ByteBuffer): void {
  // optional uint32 index = 1;
  let $index = message.index;
  if ($index !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32(bb, $index);
  }

  // optional uint32 amount = 2;
  let $amount = message.amount;
  if ($amount !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32(bb, $amount);
  }
}

export function decodeBsPlayArg(binary: Uint8Array): BsPlayArg {
  return _decodeBsPlayArg(wrapByteBuffer(binary));
}

function _decodeBsPlayArg(bb: ByteBuffer): BsPlayArg {
  let message: BsPlayArg = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint32 index = 1;
      case 1: {
        message.index = readVarint32(bb) >>> 0;
        break;
      }

      // optional uint32 amount = 2;
      case 2: {
        message.amount = readVarint32(bb) >>> 0;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface BsPlayResult {
  result?: number;
  win?: number;
  balance?: number;
}

export function encodeBsPlayResult(message: BsPlayResult): Uint8Array {
  let bb = popByteBuffer();
  _encodeBsPlayResult(message, bb);
  return toUint8Array(bb);
}

function _encodeBsPlayResult(message: BsPlayResult, bb: ByteBuffer): void {
  // optional uint32 result = 3;
  let $result = message.result;
  if ($result !== undefined) {
    writeVarint32(bb, 24);
    writeVarint32(bb, $result);
  }

  // optional uint32 win = 4;
  let $win = message.win;
  if ($win !== undefined) {
    writeVarint32(bb, 32);
    writeVarint32(bb, $win);
  }

  // optional uint32 balance = 5;
  let $balance = message.balance;
  if ($balance !== undefined) {
    writeVarint32(bb, 40);
    writeVarint32(bb, $balance);
  }
}

export function decodeBsPlayResult(binary: Uint8Array): BsPlayResult {
  return _decodeBsPlayResult(wrapByteBuffer(binary));
}

function _decodeBsPlayResult(bb: ByteBuffer): BsPlayResult {
  let message: BsPlayResult = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint32 result = 3;
      case 3: {
        message.result = readVarint32(bb) >>> 0;
        break;
      }

      // optional uint32 win = 4;
      case 4: {
        message.win = readVarint32(bb) >>> 0;
        break;
      }

      // optional uint32 balance = 5;
      case 5: {
        message.balance = readVarint32(bb) >>> 0;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface CancelArg {
}

export function encodeCancelArg(message: CancelArg): Uint8Array {
  let bb = popByteBuffer();
  _encodeCancelArg(message, bb);
  return toUint8Array(bb);
}

function _encodeCancelArg(message: CancelArg, bb: ByteBuffer): void {
}

export function decodeCancelArg(binary: Uint8Array): CancelArg {
  return _decodeCancelArg(wrapByteBuffer(binary));
}

function _decodeCancelArg(bb: ByteBuffer): CancelArg {
  let message: CancelArg = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface CancelResult {
  balance?: number;
}

export function encodeCancelResult(message: CancelResult): Uint8Array {
  let bb = popByteBuffer();
  _encodeCancelResult(message, bb);
  return toUint8Array(bb);
}

function _encodeCancelResult(message: CancelResult, bb: ByteBuffer): void {
  // optional uint32 balance = 3;
  let $balance = message.balance;
  if ($balance !== undefined) {
    writeVarint32(bb, 24);
    writeVarint32(bb, $balance);
  }
}

export function decodeCancelResult(binary: Uint8Array): CancelResult {
  return _decodeCancelResult(wrapByteBuffer(binary));
}

function _decodeCancelResult(bb: ByteBuffer): CancelResult {
  let message: CancelResult = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint32 balance = 3;
      case 3: {
        message.balance = readVarint32(bb) >>> 0;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Bet {
  index?: number;
  amount?: number;
}

export function encodeBet(message: Bet): Uint8Array {
  let bb = popByteBuffer();
  _encodeBet(message, bb);
  return toUint8Array(bb);
}

function _encodeBet(message: Bet, bb: ByteBuffer): void {
  // optional uint32 index = 1;
  let $index = message.index;
  if ($index !== undefined) {
    writeVarint32(bb, 8);
    writeVarint32(bb, $index);
  }

  // optional uint32 amount = 2;
  let $amount = message.amount;
  if ($amount !== undefined) {
    writeVarint32(bb, 16);
    writeVarint32(bb, $amount);
  }
}

export function decodeBet(binary: Uint8Array): Bet {
  return _decodeBet(wrapByteBuffer(binary));
}

function _decodeBet(bb: ByteBuffer): Bet {
  let message: Bet = {} as any;

  end_of_message: while (!isAtEnd(bb)) {
    let tag = readVarint32(bb);

    switch (tag >>> 3) {
      case 0:
        break end_of_message;

      // optional uint32 index = 1;
      case 1: {
        message.index = readVarint32(bb) >>> 0;
        break;
      }

      // optional uint32 amount = 2;
      case 2: {
        message.amount = readVarint32(bb) >>> 0;
        break;
      }

      default:
        skipUnknownField(bb, tag & 7);
    }
  }

  return message;
}

export interface Long {
  low: number;
  high: number;
  unsigned: boolean;
}

interface ByteBuffer {
  bytes: Uint8Array;
  offset: number;
  limit: number;
}

function pushTemporaryLength(bb: ByteBuffer): number {
  let length = readVarint32(bb);
  let limit = bb.limit;
  bb.limit = bb.offset + length;
  return limit;
}

function skipUnknownField(bb: ByteBuffer, type: number): void {
  switch (type) {
    case 0: while (readByte(bb) & 0x80) { } break;
    case 2: skip(bb, readVarint32(bb)); break;
    case 5: skip(bb, 4); break;
    case 1: skip(bb, 8); break;
    default: throw new Error("Unimplemented type: " + type);
  }
}

function stringToLong(value: string): Long {
  return {
    low: value.charCodeAt(0) | (value.charCodeAt(1) << 16),
    high: value.charCodeAt(2) | (value.charCodeAt(3) << 16),
    unsigned: false,
  };
}

function longToString(value: Long): string {
  let low = value.low;
  let high = value.high;
  return String.fromCharCode(
    low & 0xFFFF,
    low >>> 16,
    high & 0xFFFF,
    high >>> 16);
}

// The code below was modified from https://github.com/protobufjs/bytebuffer.js
// which is under the Apache License 2.0.

let f32 = new Float32Array(1);
let f32_u8 = new Uint8Array(f32.buffer);

let f64 = new Float64Array(1);
let f64_u8 = new Uint8Array(f64.buffer);

function intToLong(value: number): Long {
  value |= 0;
  return {
    low: value,
    high: value >> 31,
    unsigned: value >= 0,
  };
}

let bbStack: ByteBuffer[] = [];

function popByteBuffer(): ByteBuffer {
  const bb = bbStack.pop();
  if (!bb) return { bytes: new Uint8Array(64), offset: 0, limit: 0 };
  bb.offset = bb.limit = 0;
  return bb;
}

function pushByteBuffer(bb: ByteBuffer): void {
  bbStack.push(bb);
}

function wrapByteBuffer(bytes: Uint8Array): ByteBuffer {
  return { bytes, offset: 0, limit: bytes.length };
}

function toUint8Array(bb: ByteBuffer): Uint8Array {
  let bytes = bb.bytes;
  let limit = bb.limit;
  return bytes.length === limit ? bytes : bytes.subarray(0, limit);
}

function skip(bb: ByteBuffer, offset: number): void {
  if (bb.offset + offset > bb.limit) {
    throw new Error('Skip past limit');
  }
  bb.offset += offset;
}

function isAtEnd(bb: ByteBuffer): boolean {
  return bb.offset >= bb.limit;
}

function grow(bb: ByteBuffer, count: number): number {
  let bytes = bb.bytes;
  let offset = bb.offset;
  let limit = bb.limit;
  let finalOffset = offset + count;
  if (finalOffset > bytes.length) {
    let newBytes = new Uint8Array(finalOffset * 2);
    newBytes.set(bytes);
    bb.bytes = newBytes;
  }
  bb.offset = finalOffset;
  if (finalOffset > limit) {
    bb.limit = finalOffset;
  }
  return offset;
}

function advance(bb: ByteBuffer, count: number): number {
  let offset = bb.offset;
  if (offset + count > bb.limit) {
    throw new Error('Read past limit');
  }
  bb.offset += count;
  return offset;
}

function readBytes(bb: ByteBuffer, count: number): Uint8Array {
  let offset = advance(bb, count);
  return bb.bytes.subarray(offset, offset + count);
}

function writeBytes(bb: ByteBuffer, buffer: Uint8Array): void {
  let offset = grow(bb, buffer.length);
  bb.bytes.set(buffer, offset);
}

function readString(bb: ByteBuffer, count: number): string {
  // Sadly a hand-coded UTF8 decoder is much faster than subarray+TextDecoder in V8
  let offset = advance(bb, count);
  let fromCharCode = String.fromCharCode;
  let bytes = bb.bytes;
  let invalid = '\uFFFD';
  let text = '';

  for (let i = 0; i < count; i++) {
    let c1 = bytes[i + offset], c2: number, c3: number, c4: number, c: number;

    // 1 byte
    if ((c1 & 0x80) === 0) {
      text += fromCharCode(c1);
    }

    // 2 bytes
    else if ((c1 & 0xE0) === 0xC0) {
      if (i + 1 >= count) text += invalid;
      else {
        c2 = bytes[i + offset + 1];
        if ((c2 & 0xC0) !== 0x80) text += invalid;
        else {
          c = ((c1 & 0x1F) << 6) | (c2 & 0x3F);
          if (c < 0x80) text += invalid;
          else {
            text += fromCharCode(c);
            i++;
          }
        }
      }
    }

    // 3 bytes
    else if ((c1 & 0xF0) == 0xE0) {
      if (i + 2 >= count) text += invalid;
      else {
        c2 = bytes[i + offset + 1];
        c3 = bytes[i + offset + 2];
        if (((c2 | (c3 << 8)) & 0xC0C0) !== 0x8080) text += invalid;
        else {
          c = ((c1 & 0x0F) << 12) | ((c2 & 0x3F) << 6) | (c3 & 0x3F);
          if (c < 0x0800 || (c >= 0xD800 && c <= 0xDFFF)) text += invalid;
          else {
            text += fromCharCode(c);
            i += 2;
          }
        }
      }
    }

    // 4 bytes
    else if ((c1 & 0xF8) == 0xF0) {
      if (i + 3 >= count) text += invalid;
      else {
        c2 = bytes[i + offset + 1];
        c3 = bytes[i + offset + 2];
        c4 = bytes[i + offset + 3];
        if (((c2 | (c3 << 8) | (c4 << 16)) & 0xC0C0C0) !== 0x808080) text += invalid;
        else {
          c = ((c1 & 0x07) << 0x12) | ((c2 & 0x3F) << 0x0C) | ((c3 & 0x3F) << 0x06) | (c4 & 0x3F);
          if (c < 0x10000 || c > 0x10FFFF) text += invalid;
          else {
            c -= 0x10000;
            text += fromCharCode((c >> 10) + 0xD800, (c & 0x3FF) + 0xDC00);
            i += 3;
          }
        }
      }
    }

    else text += invalid;
  }

  return text;
}

function writeString(bb: ByteBuffer, text: string): void {
  // Sadly a hand-coded UTF8 encoder is much faster than TextEncoder+set in V8
  let n = text.length;
  let byteCount = 0;

  // Write the byte count first
  for (let i = 0; i < n; i++) {
    let c = text.charCodeAt(i);
    if (c >= 0xD800 && c <= 0xDBFF && i + 1 < n) {
      c = (c << 10) + text.charCodeAt(++i) - 0x35FDC00;
    }
    byteCount += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
  }
  writeVarint32(bb, byteCount);

  let offset = grow(bb, byteCount);
  let bytes = bb.bytes;

  // Then write the bytes
  for (let i = 0; i < n; i++) {
    let c = text.charCodeAt(i);
    if (c >= 0xD800 && c <= 0xDBFF && i + 1 < n) {
      c = (c << 10) + text.charCodeAt(++i) - 0x35FDC00;
    }
    if (c < 0x80) {
      bytes[offset++] = c;
    } else {
      if (c < 0x800) {
        bytes[offset++] = ((c >> 6) & 0x1F) | 0xC0;
      } else {
        if (c < 0x10000) {
          bytes[offset++] = ((c >> 12) & 0x0F) | 0xE0;
        } else {
          bytes[offset++] = ((c >> 18) & 0x07) | 0xF0;
          bytes[offset++] = ((c >> 12) & 0x3F) | 0x80;
        }
        bytes[offset++] = ((c >> 6) & 0x3F) | 0x80;
      }
      bytes[offset++] = (c & 0x3F) | 0x80;
    }
  }
}

function writeByteBuffer(bb: ByteBuffer, buffer: ByteBuffer): void {
  let offset = grow(bb, buffer.limit);
  let from = bb.bytes;
  let to = buffer.bytes;

  // This for loop is much faster than subarray+set on V8
  for (let i = 0, n = buffer.limit; i < n; i++) {
    from[i + offset] = to[i];
  }
}

function readByte(bb: ByteBuffer): number {
  return bb.bytes[advance(bb, 1)];
}

function writeByte(bb: ByteBuffer, value: number): void {
  let offset = grow(bb, 1);
  bb.bytes[offset] = value;
}

function readFloat(bb: ByteBuffer): number {
  let offset = advance(bb, 4);
  let bytes = bb.bytes;

  // Manual copying is much faster than subarray+set in V8
  f32_u8[0] = bytes[offset++];
  f32_u8[1] = bytes[offset++];
  f32_u8[2] = bytes[offset++];
  f32_u8[3] = bytes[offset++];
  return f32[0];
}

function writeFloat(bb: ByteBuffer, value: number): void {
  let offset = grow(bb, 4);
  let bytes = bb.bytes;
  f32[0] = value;

  // Manual copying is much faster than subarray+set in V8
  bytes[offset++] = f32_u8[0];
  bytes[offset++] = f32_u8[1];
  bytes[offset++] = f32_u8[2];
  bytes[offset++] = f32_u8[3];
}

function readDouble(bb: ByteBuffer): number {
  let offset = advance(bb, 8);
  let bytes = bb.bytes;

  // Manual copying is much faster than subarray+set in V8
  f64_u8[0] = bytes[offset++];
  f64_u8[1] = bytes[offset++];
  f64_u8[2] = bytes[offset++];
  f64_u8[3] = bytes[offset++];
  f64_u8[4] = bytes[offset++];
  f64_u8[5] = bytes[offset++];
  f64_u8[6] = bytes[offset++];
  f64_u8[7] = bytes[offset++];
  return f64[0];
}

function writeDouble(bb: ByteBuffer, value: number): void {
  let offset = grow(bb, 8);
  let bytes = bb.bytes;
  f64[0] = value;

  // Manual copying is much faster than subarray+set in V8
  bytes[offset++] = f64_u8[0];
  bytes[offset++] = f64_u8[1];
  bytes[offset++] = f64_u8[2];
  bytes[offset++] = f64_u8[3];
  bytes[offset++] = f64_u8[4];
  bytes[offset++] = f64_u8[5];
  bytes[offset++] = f64_u8[6];
  bytes[offset++] = f64_u8[7];
}

function readInt32(bb: ByteBuffer): number {
  let offset = advance(bb, 4);
  let bytes = bb.bytes;
  return (
    bytes[offset] |
    (bytes[offset + 1] << 8) |
    (bytes[offset + 2] << 16) |
    (bytes[offset + 3] << 24)
  );
}

function writeInt32(bb: ByteBuffer, value: number): void {
  let offset = grow(bb, 4);
  let bytes = bb.bytes;
  bytes[offset] = value;
  bytes[offset + 1] = value >> 8;
  bytes[offset + 2] = value >> 16;
  bytes[offset + 3] = value >> 24;
}

function readInt64(bb: ByteBuffer, unsigned: boolean): Long {
  return {
    low: readInt32(bb),
    high: readInt32(bb),
    unsigned,
  };
}

function writeInt64(bb: ByteBuffer, value: Long): void {
  writeInt32(bb, value.low);
  writeInt32(bb, value.high);
}

function readVarint32(bb: ByteBuffer): number {
  let c = 0;
  let value = 0;
  let b: number;
  do {
    b = readByte(bb);
    if (c < 32) value |= (b & 0x7F) << c;
    c += 7;
  } while (b & 0x80);
  return value;
}

function writeVarint32(bb: ByteBuffer, value: number): void {
  value >>>= 0;
  while (value >= 0x80) {
    writeByte(bb, (value & 0x7f) | 0x80);
    value >>>= 7;
  }
  writeByte(bb, value);
}

function readVarint64(bb: ByteBuffer, unsigned: boolean): Long {
  let part0 = 0;
  let part1 = 0;
  let part2 = 0;
  let b: number;

  b = readByte(bb); part0 = (b & 0x7F); if (b & 0x80) {
    b = readByte(bb); part0 |= (b & 0x7F) << 7; if (b & 0x80) {
      b = readByte(bb); part0 |= (b & 0x7F) << 14; if (b & 0x80) {
        b = readByte(bb); part0 |= (b & 0x7F) << 21; if (b & 0x80) {

          b = readByte(bb); part1 = (b & 0x7F); if (b & 0x80) {
            b = readByte(bb); part1 |= (b & 0x7F) << 7; if (b & 0x80) {
              b = readByte(bb); part1 |= (b & 0x7F) << 14; if (b & 0x80) {
                b = readByte(bb); part1 |= (b & 0x7F) << 21; if (b & 0x80) {

                  b = readByte(bb); part2 = (b & 0x7F); if (b & 0x80) {
                    b = readByte(bb); part2 |= (b & 0x7F) << 7;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return {
    low: part0 | (part1 << 28),
    high: (part1 >>> 4) | (part2 << 24),
    unsigned,
  };
}

function writeVarint64(bb: ByteBuffer, value: Long): void {
  let part0 = value.low >>> 0;
  let part1 = ((value.low >>> 28) | (value.high << 4)) >>> 0;
  let part2 = value.high >>> 24;

  // ref: src/google/protobuf/io/coded_stream.cc
  let size =
    part2 === 0 ?
      part1 === 0 ?
        part0 < 1 << 14 ?
          part0 < 1 << 7 ? 1 : 2 :
          part0 < 1 << 21 ? 3 : 4 :
        part1 < 1 << 14 ?
          part1 < 1 << 7 ? 5 : 6 :
          part1 < 1 << 21 ? 7 : 8 :
      part2 < 1 << 7 ? 9 : 10;

  let offset = grow(bb, size);
  let bytes = bb.bytes;

  switch (size) {
    case 10: bytes[offset + 9] = (part2 >>> 7) & 0x01;
    case 9: bytes[offset + 8] = size !== 9 ? part2 | 0x80 : part2 & 0x7F;
    case 8: bytes[offset + 7] = size !== 8 ? (part1 >>> 21) | 0x80 : (part1 >>> 21) & 0x7F;
    case 7: bytes[offset + 6] = size !== 7 ? (part1 >>> 14) | 0x80 : (part1 >>> 14) & 0x7F;
    case 6: bytes[offset + 5] = size !== 6 ? (part1 >>> 7) | 0x80 : (part1 >>> 7) & 0x7F;
    case 5: bytes[offset + 4] = size !== 5 ? part1 | 0x80 : part1 & 0x7F;
    case 4: bytes[offset + 3] = size !== 4 ? (part0 >>> 21) | 0x80 : (part0 >>> 21) & 0x7F;
    case 3: bytes[offset + 2] = size !== 3 ? (part0 >>> 14) | 0x80 : (part0 >>> 14) & 0x7F;
    case 2: bytes[offset + 1] = size !== 2 ? (part0 >>> 7) | 0x80 : (part0 >>> 7) & 0x7F;
    case 1: bytes[offset] = size !== 1 ? part0 | 0x80 : part0 & 0x7F;
  }
}

function readVarint32ZigZag(bb: ByteBuffer): number {
  let value = readVarint32(bb);

  // ref: src/google/protobuf/wire_format_lite.h
  return (value >>> 1) ^ -(value & 1);
}

function writeVarint32ZigZag(bb: ByteBuffer, value: number): void {
  // ref: src/google/protobuf/wire_format_lite.h
  writeVarint32(bb, (value << 1) ^ (value >> 31));
}

function readVarint64ZigZag(bb: ByteBuffer): Long {
  let value = readVarint64(bb, /* unsigned */ false);
  let low = value.low;
  let high = value.high;
  let flip = -(low & 1);

  // ref: src/google/protobuf/wire_format_lite.h
  return {
    low: ((low >>> 1) | (high << 31)) ^ flip,
    high: (high >>> 1) ^ flip,
    unsigned: false,
  };
}

function writeVarint64ZigZag(bb: ByteBuffer, value: Long): void {
  let low = value.low;
  let high = value.high;
  let flip = high >> 31;

  // ref: src/google/protobuf/wire_format_lite.h
  writeVarint64(bb, {
    low: (low << 1) ^ flip,
    high: ((high << 1) | (low >>> 31)) ^ flip,
    unsigned: false,
  });
}
