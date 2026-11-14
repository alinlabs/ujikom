import { BidangId, BidangMateri, PokokBahasanItem, ReferensiBuku } from '../../types/materi';
import { dataMateriOperasional } from './data-materi-operasional';
import { dataMateriKeuangan } from './data-materi-keuangan';
import { dataMateriPemasaran } from './data-materi-pemasaran';
import { dataMateriSdm } from './data-materi-sdm';

export const allBidangMateri: BidangMateri[] = [
  dataMateriOperasional,
  dataMateriKeuangan,
  dataMateriPemasaran,
  dataMateriSdm,
];

export const getBidangById = (id: string): BidangMateri | undefined => {
  return allBidangMateri.find((b) => b.id.toLowerCase() === id.toLowerCase());
};

export const getTopicById = (
  bidangId: string,
  topicId: string
): { bidang: BidangMateri; topic: PokokBahasanItem } | undefined => {
  const bidang = getBidangById(bidangId);
  if (!bidang) return undefined;
  const topic = bidang.pokokBahasan.find((t) => t.id === topicId);
  if (!topic) return undefined;
  return { bidang, topic };
};

export const searchMateri = (
  query: string
): Array<{
  bidang: BidangMateri;
  topic: PokokBahasanItem;
  matchedIn: 'judul' | 'ringkasan' | 'fokusUjian' | 'isiMateri';
}> => {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) return [];

  const results: Array<{
    bidang: BidangMateri;
    topic: PokokBahasanItem;
    matchedIn: 'judul' | 'ringkasan' | 'fokusUjian' | 'isiMateri';
  }> = [];

  for (const bidang of allBidangMateri) {
    for (const topic of bidang.pokokBahasan) {
      if (topic.judul.toLowerCase().includes(cleanQuery)) {
        results.push({ bidang, topic, matchedIn: 'judul' });
      } else if (topic.fokusUjian.toLowerCase().includes(cleanQuery)) {
        results.push({ bidang, topic, matchedIn: 'fokusUjian' });
      } else if (topic.ringkasan.toLowerCase().includes(cleanQuery)) {
        results.push({ bidang, topic, matchedIn: 'ringkasan' });
      } else if (topic.isiMateri.toLowerCase().includes(cleanQuery)) {
        results.push({ bidang, topic, matchedIn: 'isiMateri' });
      }
    }
  }

  return results;
};

export const getTotalPokokBahasanCount = (): number => {
  return allBidangMateri.reduce((sum, b) => sum + b.pokokBahasan.length, 0);
};

export const getAllReferensi = (): Array<{ bidangNama: string; referensi: ReferensiBuku[] }> => {
  return allBidangMateri.map((b) => ({
    bidangNama: b.nama,
    referensi: b.referensi,
  }));
};
