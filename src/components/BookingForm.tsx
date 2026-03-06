import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useBookingForm } from "@/contexts/BookingFormContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const bookingFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  serviceType: z.string().min(1, "Please select a service"),
  quantity: z.string().min(1, "Please enter quantity"),
  description: z.string().optional(),
  preferredDate: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

const services = [
  { value: "vhs-to-digital", label: "VHS to Digital" },
  { value: "minidv-conversion", label: "MiniDV Conversion" },
  { value: "cassette-to-digital", label: "Cassette to Digital" },
  { value: "hi8-conversion", label: "Hi8 / Video8 Conversion" },
  { value: "dvd-delivery", label: "DVD & Cloud Delivery" },
  { value: "other", label: "Other" },
];

const BookingForm = () => {
  const { isOpen, closeBookingForm } = useBookingForm();

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      quantity: "1",
      description: "",
      preferredDate: "",
    },
  });

  const onSubmit = async (values: BookingFormValues) => {
    try {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", values);
      toast.success("Booking request submitted! We'll contact you soon.");
      form.reset();
      closeBookingForm();
    } catch (error) {
      toast.error("Failed to submit booking. Please try again.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeBookingForm}>
      <DialogContent className="w-[95vw] max-w-sm sm:max-w-md md:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book Your Order</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you with a quote and timeline.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 sm:space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name"
                      className="h-10 sm:h-auto text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="h-10 sm:h-auto text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base">Phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="(123) 456-7890"
                      className="h-10 sm:h-auto text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base">Service Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="h-10 sm:h-auto text-base">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value}>
                          {service.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base">Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min="1"
                      placeholder="1"
                      className="h-10 sm:h-auto text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-xs sm:text-sm">Number of items to be converted</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preferredDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base">Preferred Delivery Date (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      className="h-10 sm:h-auto text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base">Additional Details (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us more about your project..."
                      className="resize-none min-h-24 sm:min-h-28 text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row">
              <Button
                type="button"
                variant="outline"
                onClick={closeBookingForm}
                className="flex-1 h-10 sm:h-auto"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 h-10 sm:h-auto"
              >
                Submit Booking
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;
