import { format } from 'date-fns';
import Image from 'next/image';
import { FC } from 'react';

import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface AdministratorCardProps {
  title: string;
  description: string;
  category: string;
  author: string;
  imageUrl: string; 
  createdAt: Date;
  blogId: number;
} 

const AdministratorCard: FC<AdministratorCardProps> = ({
  title,
  description,
  category,
  author, 
  imageUrl,
  createdAt,
  blogId,
}) => {
  return (
    <Link href={`/${blogId}`}>
    <Card>
      <CardHeader>
        <div className="relative h-[220px] w-full overflow-hidden rounded-md">
          <Image src={imageUrl} alt="photo profile" className="object-cover" fill />
        </div>
      </CardHeader>
      <CardContent>
        <Badge className="rounded-sm bg-green-100" variant="outline">
          {category}
        </Badge>
        <h2 className="line-clamp-2 text-lg font-semibold">{title}</h2>
        <p className="text-sm font-light italic">
          {format(createdAt, 'dd MMMM yyyy')} - {author}
        </p>
        <p className="line-clamp-3">{description}</p>
      </CardContent>
    </Card>
    </Link>
  );
};

export default AdministratorCard;
