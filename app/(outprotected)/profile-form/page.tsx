'use client';

import { Button, Card, DatePicker, Input, Select, SelectItem } from '@heroui/react';

export default function page() {
  return (
    <Card className="p-4 ">
      <p className="text-lg font-semibold">Lengkapin Data Berikut</p>
      <div className="grid grid-cols-2 w-[600px] gap-x-4 gap-y-2">
        <p className="col-span-2 text-center text-sm text-gray-500">Profile</p>
        <Input variant="underlined" type="text" label="First Name" name="firstName" placeholder="Enter first name" />
        <Input variant="underlined" type="text" label="Last Name" name="lastName" placeholder="Enter last name" />
        <DatePicker variant="underlined" label="Birth Date" />
        <Input variant="underlined" type="text" label="Birth Place" name="birthPlace" placeholder="Enter birth place" />
        <Select label="Base Currency" variant="underlined" placeholder="Select currency" defaultSelectedKeys={['IDR']}>
          <SelectItem key="IDR">IDR (Rp)</SelectItem>
          <SelectItem key="USD" isReadOnly className="text-gray-400">
            USD ($)
          </SelectItem>
        </Select>
        <Input variant="underlined" type="number" label="Phone Number" name="birthPlace" placeholder="Enter phone number" />
        <Input variant="underlined" type="text" label="City" name="city" placeholder="Enter city" />
        <Input variant="underlined" type="text" label="Country" name="country" placeholder="Enter country" />
        <p className="col-span-2 text-center text-sm text-gray-500 leading-none mt-4">Survey</p>
        <Select className="col-span-2" label="Dari mana kamu tahu tentang kami?" variant="underlined" name="source">
          <SelectItem key="advertisement">Iklan</SelectItem>
          <SelectItem key="tiktok">Tiktok</SelectItem>
          <SelectItem key="facebook">Facebook</SelectItem>
          <SelectItem key="instagram">Instagram</SelectItem>
          <SelectItem key="friend">Dari teman</SelectItem>
          <SelectItem key="content_creator">Konten Kreator</SelectItem>
          <SelectItem key="google_search">Pencarian google</SelectItem>
          <SelectItem key="other">Lainnya</SelectItem>
        </Select>
        <Select className="col-span-2" label="Untuk keperluan apa kamu menggunakan aplikasi ini?" variant="underlined" name="source">
          <SelectItem key="personal">Personal</SelectItem>
          <SelectItem key="small_business">Small business</SelectItem>
          <SelectItem key="enterprise">Enterprise</SelectItem>
          <SelectItem key="family">Family</SelectItem>
          <SelectItem key="other">Other</SelectItem>
        </Select>
        <Button type="submit" color="primary" className="col-span-2 mt-6">
          Save
        </Button>
        <Button type="button" className="col-span-2" variant="light">
          Cancel
        </Button>
      </div>
    </Card>
  );
}
